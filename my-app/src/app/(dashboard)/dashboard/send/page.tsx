"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const QUICK_AMOUNTS = [0.01, 0.05, 0.1, 0.5];

const PLACEHOLDER_BALANCE = 0;

export default function SendPage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-black-slug">Send ETH</h1>
        <p className="text-sm text-peppered-pecan mt-1">
          Send ETH to another wallet address on Sepolia Testnet
        </p>
      </div>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-base text-black-slug">
            Transaction Details
          </CardTitle>
          <CardDescription>...</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Recipient */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="recipient"
              className="text-sm font-medium text-black-slug"
            >
              Recipient Address
            </label>
            <input
              id="recipient"
              type="text"
              placeholder="0x..."
              disabled
              aria-describedby="recipient-hint"
              className="border rounded-md border-cassiterite-brown/40 p-2 text-sm text-peppered-pecan bg-casual-khaki/20 cursor-not-allowed"
            />
            <p id="recipient-hint" className="text-xs text-peppered-pecan">
              Must be a valid Ethereum address (0x...)
            </p>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="amount"
                className="text-sm font-medium text-black-slug"
              >
                Amount (ETH)
              </label>
              <span className="text-xs text-peppered-pecan">
                Balance: {PLACEHOLDER_BALANCE} ETH
              </span>
            </div>
            <input
              id="amount"
              type="number"
              min="0"
              step="0.0001"
              placeholder="0.0000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-describedby="amount-hint"
              className="border rounded-md border-cassiterite-brown p-2 text-sm text-black-slug focus:outline-none focus:ring-1 focus:ring-cassiterite-brown"
            />
            <p id="amount-hint" className="text-xs text-peppered-pecan">
              ≈ $0.00 USD
            </p>

            {/* Quick Amount */}
            <div
              className="flex gap-2 flex-wrap"
              role="group"
              aria-label="Quick amount selection"
            >
              {QUICK_AMOUNTS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(String(preset))}
                  className={`px-3 py-1 rounded-md text-xs font-medium border hoverEffect
                    ${
                      amount === String(preset)
                        ? "bg-cassiterite-brown text-white border-cassiterite-brown"
                        : "border-cassiterite-brown/40 text-cassiterite-brown hover:bg-casual-khaki/40"
                    }`}
                >
                  {preset}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setAmount(String(PLACEHOLDER_BALANCE))}
                className={`px-3 py-1 rounded-md text-xs font-medium border hoverEffect
                  ${
                    amount === String(PLACEHOLDER_BALANCE)
                      ? "bg-cassiterite-brown text-white border-cassiterite-brown"
                      : "border-cassiterite-brown/40 text-cassiterite-brown hover:bg-casual-khaki/40"
                  }`}
              >
                MAX
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            disabled
            className="rounded-md w-full bg-cassiterite-brown/40 text-white p-2 cursor-not-allowed text-sm hoverEffect mt-2"
          >
            Send ETH
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
