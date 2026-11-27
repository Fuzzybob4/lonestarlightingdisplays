import crypto from "crypto"
import { cookies } from "next/headers"

const ADMIN_EMAIL = "lonestarlightingdisplays@outlook.com"
// scrypt(password, salt, 64) — the plain-text password is never stored in the repo.
const PASSWORD_SALT = "bfbdd0c4718f53c8c5f2b3a3db8cc54e"
const PASSWORD_HASH =
  "35394b04ed158fa261cd27e76b2918fcf86ca1e549773c1cd757d1bdb660dc0dc982db0c2ad5526d07de2badde5772afe4bee5835ace8c0f08866fbddd89b228"

const SESSION_COOKIE = "lsld_admin"
const SESSION_TTL_SECONDS = 60 * 60 * 12

function sessionKey() {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.BLOB_READ_WRITE_TOKEN
  if (!secret) throw new Error("Admin session secret is not configured")
  return crypto.createHash("sha256").update(`lsld-admin-session:${secret}`).digest("hex")
}

function sign(value: string) {
  return crypto.createHmac("sha256", sessionKey()).update(value).digest("hex")
}

function safeEqual(a: string, b: string) {
  const bufA = new TextEncoder().encode(a)
  const bufB = new TextEncoder().encode(b)
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB)
}

export function verifyCredentials(email: string, password: string) {
  const emailMatches = safeEqual(email.trim().toLowerCase(), ADMIN_EMAIL)
  const hash = crypto.scryptSync(password, PASSWORD_SALT, 64).toString("hex")
  const passwordMatches = safeEqual(hash, PASSWORD_HASH)
  return emailMatches && passwordMatches
}

export function startAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  const payload = String(expires)
  cookies().set(SESSION_COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  })
}

export function endAdminSession() {
  cookies().set(SESSION_COOKIE, "", { httpOnly: true, secure: true, sameSite: "none", path: "/", maxAge: 0 })
}

export function isAdmin() {
  const token = cookies().get(SESSION_COOKIE)?.value
  if (!token) return false
  const [payload, signature] = token.split(".")
  if (!payload || !signature) return false
  try {
    if (!safeEqual(signature, sign(payload))) return false
  } catch {
    return false
  }
  return Number(payload) > Math.floor(Date.now() / 1000)
}
