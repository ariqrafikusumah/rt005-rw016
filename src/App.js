import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Beranda,NotFound } from "./pages"
import { Login } from "./auth"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}