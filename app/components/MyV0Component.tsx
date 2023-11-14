/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8asciZoqngc
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col w-full max-w-sm items-center space-y-4 bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center">
        Sign Up for My Newsletter
      </h1>
      <div className="flex w-full items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg p-2">
        <Input
          className="flex-1 text-gray-900 dark:text-gray-100 outline-none"
          placeholder="Your email address"
          required
          type="email"
        />
        <Button className="bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" type="submit" variant="outline">
          Subscribe
        </Button>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Thank you for subscribing to my newsletter!</p>
    </div>
  )
}
