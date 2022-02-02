import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organism/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageURL="https://source.unsplash.com/random"
          userName="KMT"
          fullName="kimoto"
        />
      </WrapItem>
    </Wrap>
  );
});
