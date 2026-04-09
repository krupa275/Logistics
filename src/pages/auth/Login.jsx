import { useForm } from "react-hook-form"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/common/password"
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from "@/store-factory/slices/auth"
import { AdminUser } from "@/constant/credentials"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/constant/routes"

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users } = useSelector((state) => state.users)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm()

  const password = watch("password", "")

  const isUserValidExist = (data) => {
    if (!users?.length) return false

    return users.find(
      (user) =>
        user.username === data.username && user.password === data.password,
    )
  }

  const onSubmit = async (data) => {
    const { userName, password: defaultPassword } = AdminUser
    if (userName === data.username && defaultPassword === data.password) {
      dispatch(setCredentials(AdminUser))
      navigate(ROUTES.DASHBOARD)
    } else if (isUserValidExist(data)) {
      const loggedInData = isUserValidExist(data)
      dispatch(setCredentials(loggedInData))
      navigate(ROUTES.DASHBOARD)
    } else {
      console.log("Error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Password</Label>

              <PasswordInput
                value={password}
                onChange={(e) => setValue("password", e.target.value)}
                error={errors.password?.message}
              />

              <input
                type="hidden"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Signing in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
