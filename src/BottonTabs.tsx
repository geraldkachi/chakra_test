import { Box, Flex ,Image,Text} from '@chakra-ui/react'

const BottonTabs = () => {
  return (
    <Box position="fixed" w="100%" bottom={0} bg='white' boxShadow="">
        <Flex justifyContent="space-evenly" alignItems='center'>
            <Flex flexDirection='column' alignItems="center" gap={1}>
                <Image src="home.svg" />
                <Text color="#707480" fontSize="16px" lineHeight="30.5px">Home</Text>
            </Flex>

            <Flex flexDirection='column' alignItems="center" gap={1}>
                <Image src="reports.svg" />
                <Text color="#707480" fontSize="16px" lineHeight="30.5px">Reports</Text>
            </Flex>

            <Flex flexDirection='column' justifyContent="space-between" alignItems="center" position="relative" gap={1}>
                <Image src="chats.svg" position="absolute" top="-5px" h="40px" w="100%" mb="60px" />
                <Box alignSelf="flex-end" mt="13px">
                    <Text color="#707480" fontSize="16px" lineHeight="30.5px" pt="12px">Chat</Text>
                </Box>
            </Flex>

            <Flex flexDirection='column' alignItems="center" gap={1}>
                <Image src="budget.svg" />
                <Text color="#707480" fontSize="16px" lineHeight="30.5px">Budget</Text>
            </Flex>

            <Flex flexDirection='column' alignItems="center" gap={1}>
                <Image src="profile.svg" />
                <Text color="#707480" fontSize="16px" lineHeight="30.5px">Profile</Text>
            </Flex>
        </Flex>

    </Box>
  )
}

export default BottonTabs