"use client";
import { getDashboard } from "@/services/admin/dashboardServices";
import React, { use, useEffect, useState } from "react";

export default function useDashboard() {
  const [dashbordData, setDashbordData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDashboard();
      setDashbordData(response.data);
      localStorage.setItem("newMessage", response.data.newMessages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { dashbordData, loading };
}
