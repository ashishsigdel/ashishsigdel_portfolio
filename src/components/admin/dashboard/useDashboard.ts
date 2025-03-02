"use client";
import { incrementByAmount } from "@/redux/features/messageCountSlice";
import { getDashboard } from "@/services/admin/dashboardServices";
import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useDashboard() {
  const [dashbordData, setDashbordData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDashboard();
      setDashbordData(response.data);

      dispatch(incrementByAmount(response.data.newMessages));
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
