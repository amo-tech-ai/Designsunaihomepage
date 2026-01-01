"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardV2Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard-v2/main");
  }, [navigate]);

  return null;
}