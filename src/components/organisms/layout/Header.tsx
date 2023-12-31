import { MenuIconButton } from "@/components/atoms/button/MenuIconButton";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";
import { Box,Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }} ml="8" p="3">
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link href="/user-management">ユーザー一覧</Link>
          </Box>
          <Link href="/setting">設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}