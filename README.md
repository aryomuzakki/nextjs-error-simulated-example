# Next JS Error Simulated Example

There are a few ways you could simulate error to test showing error.jsx or `global-error.jsx` page. Some things are needed to note, like hot reload will not work so you need to reload manually 

> You can read [this issue comment](https://github.com/vercel/next.js/issues/46964#issuecomment-1867864465) and [this](https://github.com/vercel/next.js/issues/46964#issuecomment-2338351430)

Use `FakeError.jsx` component in `page.jsx` or components inside the page to **test `error.jsx` at development or production build**.

Use `FakeError.jsx` component in `layout.jsx` or components inside layout to **test `global-error.jsx` at production build**.

To **test `global-error.jsx` in development**, you don't need the component. Follow this steps.

1. Install [React Developer Tools](https://react.dev/learn/react-developer-tools)
2. Open your browser Developer Tools, and open the new 'Component' tab
3. Select the component inside 'Error Boundary' component (but not inside HotReload cause it won't work), and click the _exclamation mark_ (!) icon _(as you can see in the screenshot)_
![gwwYDAHI](https://github.com/user-attachments/assets/98901932-2de7-4c16-99b1-c90b21ad304a)


---
---

## QR Code Generator

- ### Generate QR Code
- ### Scan QR Code

---

### Feature

- [x] PWA Support

Generate QR Code

- [x] Download as SVG
- [x] Download as PNG
- [x] Edit Foreground/Dots Color

Scan QR Code

- [x] Toggle Scanner On/Off
- [x] Toggle Flashlight On/Off
- [x] Copy Result & Open Link in New Tab if Result is a Link
- [x] Switch Camera Rear or Front

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
