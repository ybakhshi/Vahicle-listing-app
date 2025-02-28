import React from "react";
import { useParams } from "react-router-dom";

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>VehicleDetailPage {id}</h1>;
};

export default VehicleDetailPage;
