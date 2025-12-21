# Authentication API Specification

**Version**: 1.0  
**Base URL**: `/api/auth`

---

## Endpoints

### 1. Login

**POST** `/api/auth/login`

**Purpose**: Authenticate user and create session

**Request Body**:
```
{
  email: string (required, email format)
  password: string (required, min 8 chars)
}
```

**Success Response** (200):
```
{
  success: true
  data: {
    user: {
      id: string
      email: string
      name: string
      role: "admin" | "user" | "viewer"
      avatar: string (optional)
    }
    session: {
      token: string (JWT)
      expiresAt: string (ISO date)
    }
  }
}
```

**Error Responses**:
- 400: Invalid email or password format
- 401: Incorrect credentials
- 429: Too many login attempts
- 500: Server error

**Logic**:
1. Validate email format
2. Check if user exists in database
3. Compare password hash (bcrypt)
4. Generate JWT token (expires in 7 days)
5. Store session in database
6. Return user data and token

**Security**:
- Rate limit: 5 attempts per 15 minutes per IP
- Password must be hashed with bcrypt (10 rounds)
- Token must include userId, email, role
- Token secret stored in environment variable

---

### 2. Logout

**POST** `/api/auth/logout`

**Purpose**: Invalidate current session

**Headers**:
```
Authorization: Bearer {token}
```

**Success Response** (200):
```
{
  success: true
  message: "Logged out successfully"
}
```

**Logic**:
1. Extract token from Authorization header
2. Verify token is valid
3. Delete session from database
4. Return success

---

### 3. Get Current Session

**GET** `/api/auth/session`

**Purpose**: Check if user is logged in and get user data

**Headers**:
```
Authorization: Bearer {token}
```

**Success Response** (200):
```
{
  success: true
  data: {
    user: {User object}
    expiresAt: string
  }
}
```

**Error Responses**:
- 401: Invalid or expired token
- 500: Server error

**Logic**:
1. Extract token from Authorization header
2. Verify JWT signature
3. Check if session exists in database
4. Check if session is expired
5. Return user data

---

### 4. Refresh Token

**POST** `/api/auth/refresh`

**Purpose**: Get new token before expiration

**Headers**:
```
Authorization: Bearer {old_token}
```

**Success Response** (200):
```
{
  success: true
  data: {
    token: string (new JWT)
    expiresAt: string
  }
}
```

**Logic**:
1. Verify old token
2. Check if session still valid
3. Generate new token with same claims
4. Update session in database
5. Return new token

---

## Database Requirements

### users table
- id (UUID, primary key)
- email (string, unique)
- password_hash (string)
- name (string)
- role (enum: admin, user, viewer)
- avatar (string, nullable)
- created_at (timestamp)
- last_login_at (timestamp, nullable)

### sessions table
- id (UUID, primary key)
- user_id (UUID, foreign key to users)
- token (string, unique)
- expires_at (timestamp)
- created_at (timestamp)

**Indexes**:
- users.email (unique)
- sessions.token (unique)
- sessions.user_id
- sessions.expires_at (for cleanup)

---

## Environment Variables

- `JWT_SECRET` - Secret key for JWT signing (min 32 chars)
- `JWT_EXPIRY` - Token expiration time (default: "7d")
- `BCRYPT_ROUNDS` - Password hashing rounds (default: 10)

---

## Error Codes

- `INVALID_CREDENTIALS` - Wrong email or password
- `USER_NOT_FOUND` - Email not in database
- `TOKEN_EXPIRED` - Session expired
- `TOKEN_INVALID` - Malformed or tampered token
- `RATE_LIMIT_EXCEEDED` - Too many attempts

---

## Testing Checklist

- [ ] Can login with valid credentials
- [ ] Cannot login with wrong password
- [ ] Cannot login with non-existent email
- [ ] Token includes correct user data
- [ ] Token expires after configured time
- [ ] Can logout successfully
- [ ] Cannot use token after logout
- [ ] Can refresh token before expiry
- [ ] Rate limiting works
- [ ] Password is never returned in response
