# 🚀 Appliful.com

Welcome to Appliful.com - Your Ultimate Web App Boilerplate! 🎉

## 🌟 Features

Appliful.com is a powerful boilerplate that combines cutting-edge technologies to jumpstart your web application development. Here's what makes it awesome:

- 🟢 **Node.js** - Rock-solid runtime for server-side JavaScript
- ⚡ **Next.js** - React framework for production-ready apps
- 🗃️ **Supabase** - Feature-rich backend as a service for your SQL database needs
- 💳 **Stripe** - Secure and flexible payment processing
- 🤖 **Replicate** - Seamless AI integrations to supercharge your app
- 📧 **Loops** - Modern email sending for your app's communications
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🧰 **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- 🎩 **MagicUI** - MagicUI is a UI library that allows you to create beautiful UI components with ease.

## 🚀 Getting Started

## Step 1: Prerequisites

Make sure you have the following installed on your machine.

- [node.js](https://nodejs.org/en/) (v20 or higher)
- [git](https://git-scm.com/)
- [docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/) (recommended) or [npm](https://www.npmjs.com/)
- (optional) [Cursor](https://www.cursor.com/) (recommended) or [VSCode](https://code.visualstudio.com/)

Once you have all these installed and running on your machine, you can proceed to the next step.

## Step 2: Code download and setup

Open your terminal on macOs (command + space and type `terminal`)

Paste the following command to download repository

```
git clone git@github.com:rokanost/appliful.git my-startup-name
```

Navigate to the project directory

```
cd my-startup-name
```

Remove remote origin

```
git remote remove origin
```

Install dependencies

```
pnpm install
```

## Step 3: Config

Run the setup script to create `.env.local` file and prefill local Supabase keys.
It will also start a local Supabase instance.

```
chmod +x setup.sh && ./setup.sh
```

## Step 4: Run

```
pnpm run dev
```

Congrats! Your app is now running 🎉

Open http://localhost:3000 in your browser to see it.

## 📚 Documentation

For comprehensive documentation, please visit our official documentation site at [appliful.com/docs](https://appliful.com/docs)

## 🛠 Support

If you need assistance or have any questions, please reach out to our support team through the official channel

## 📄 License

Appliful.com is a proprietary software product. Usage is subject to the terms and conditions outlined in the license agreement provided with your purchase.

## 🙏 Acknowledgements

A big thank you to all the amazing technologies and their communities that contribute to making Appliful.com a powerful web application boilerplate!

---

Happy building with Appliful.com! 💻✨ We're excited to see what you'll create.
