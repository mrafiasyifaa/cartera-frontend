"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";
import { loginSchema, LoginFormValues } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null);
    try {
      await loginUser(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error && error.message === "AUTH_FAILED") {
        setServerError("Email atau password salah");
      } else {
        setServerError("Terjadi kesalahan jaringan. Silahkan coba lagi.");
      }
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Access your wallet securely</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {serverError && (
            <div
              role="alert"
              className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600"
            >
              {serverError}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-md border-cassiterite-brown p-2 focus:border-black-slug"
              type="email"
              id="email"
              placeholder="hello@example.com"
              autoComplete="email"
              aria-describedby={errors.email ? `email-error` : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                className="border rounded-md border-cassiterite-brown p-2 focus:border-black-slug w-full pr-24"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                autoComplete="current-password"
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-black"
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
              >
                {showPassword ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
            {errors.password && (
              <p
                id="password-error"
                role="alert"
                className="text-sm text-red-500"
              >
                {errors.password.message}
              </p>
            )}
            <Link
              href="/forgot-password"
              className="flex justify-end text-sm items-end text-black-slug hover:text-chill-con-carne hoverEffect"
            >
              Lupa Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-md w-full mt-8 bg-black-slug text-white p-2 rounded-p-2 hover:bg-chill-con-carne hoverEffect ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black-slug"}`}
          >
            {isSubmitting ? "Memasukkan data Anda..." : "Sign In"}
          </button>
        </form>
      </CardContent>

      <CardFooter>
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="text-black-slug hover:text-chill-con-carne hoverEffect"
        >
          {" "}
          Daftar sekarang!
        </Link>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
