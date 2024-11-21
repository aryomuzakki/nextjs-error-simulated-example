"use client"

import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants"

const fakeError = () => {
  console.log('Throwing a fake error to simulate error pages!')
  throw new Error('Error Triggered Intentionally!')
}

export default function FakeError({ condition, skipBuild }) {
  if (skipBuild && process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    // prevent failing at production build time, but will show error at production 
    return <div />
  } else {
    condition && fakeError()
  }
}