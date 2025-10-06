# Employee Authentication System

## Overview

The system now supports authentication for both regular users and employees. Employees can log in using their phone number and PIN, just like regular users.

## Database Changes

The `Employee` model has been updated with the following new fields:

- `pin`: Hashed PIN for authentication (optional)
- `otp`: One-time password for verification
- `otpExpiry`: OTP expiration timestamp
- `isVerified`: Boolean flag for account verification status
- `phone`: Now has unique constraint for authentication

## New Features

### 1. Employee Authentication Setup

**Endpoint**: `POST /employees/:id/setup-auth`

**Request Body**:

```json
{
  "pin": "1234"
}
```

**Response**:

```json
{
  "message": "Employee authentication set up. Please verify with OTP sent to phone."
}
```

This endpoint allows setting up authentication for an employee. It:

- Creates a hashed PIN
- Generates an OTP
- Sends verification SMS
- Sets `isVerified` to false

### 2. Employee Login

**Endpoint**: `POST /auth/login`

**Request Body**:

```json
{
  "phoneNumber": "+254712345678",
  "pin": "1234"
}
```

**Response for Employee**:

```json
{
  "user": {
    "id": "employee_id",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+254712345678",
    "role": "milker",
    "employeeType": "permanent",
    "farms": [...],
    "benefits": [...]
  },
  "userType": "employee",
  "token": "jwt_token"
}
```

The login endpoint now:

1. First tries to find a user with the phone number
2. If no user found, tries to find an employee
3. Returns appropriate user type and data

### 3. Password Reset for Employees

All existing auth endpoints now support employees:

- `POST /auth/request-password-reset`
- `POST /auth/verify-otp`
- `POST /auth/reset-password`

These endpoints will automatically detect whether the phone number belongs to a user or employee.

### 4. JWT Token Updates

JWT tokens now include a `userType` field ('user' or 'employee') to distinguish between user types.

The JWT strategy has been updated to validate both user types and return appropriate user data.

## Usage Flow

### Setting up Employee Authentication

1. Create an employee using the existing `POST /employees` endpoint
2. Use `POST /employees/:id/setup-auth` to set up authentication
3. Employee receives OTP via SMS
4. Employee verifies using `POST /auth/verify-otp`
5. Employee can now log in using `POST /auth/login`

### Employee Login Flow

1. Employee uses `POST /auth/login` with phone number and PIN
2. If not verified, receives new OTP
3. Employee verifies using `POST /auth/verify-otp`
4. Employee receives JWT token for authenticated requests

### Password Reset Flow

1. Employee uses `POST /auth/request-password-reset`
2. Receives OTP via SMS
3. Verifies OTP using `POST /auth/verify-otp`
4. Resets password using `POST /auth/reset-password`

## Security Considerations

- Employee PINs are hashed using bcrypt
- OTPs expire after 10 minutes
- Phone numbers must be unique across both users and employees
- JWT tokens include user type for proper authorization

## Migration Notes

- Run `npx prisma generate` to update the Prisma client
- Existing employees will need to set up authentication using the new endpoint
- The phone field in Employee model now has a unique constraint
