import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const VehicleCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText height={"200px"}></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default VehicleCardSkeleton;
