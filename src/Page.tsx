import { Box, Text, Image, Flex } from '@chakra-ui/react'
import BottonTabs from './BottonTabs'

const Page = () => {
    return (
        <>
            <Box h="100vh" padding={"22px"} backgroundColor="#FCFCFC">
                <Text fontSize='28px' style={{ color: '#001233', fontWeight: '700', lineHeight: '38px', marginTop: '30px' }}>Budget</Text>

                <Box display='flex' alignItems='center' gap="10px" margin="20px 0">
                    <img src="/naira.svg" alt="naira" />
                    <Text fontSize='14px' lineHeight='20.3px' color='#707480'>Monthly Budget</Text>
                </Box>
                <Box display='flex' alignItems='center' gap="10px" marginTop="20px" bg="white" p="14px" borderRadius="10px" boxShadow='1px 1px 1px grey' >
                    <Text fontSize="28px" fontWeight="700" lineHeight="36px">₦120,000</Text>
                </Box>

                <Box display='flex' alignItems='center' justifyContent="space-between" fontSize="16px" lineHeight="30.5px" gap={10} mt="10px">
                    <Box display='flex' alignItems='center' gap="20px">
                        <Text color="#707480">Last Month</Text>

                        <Box display='flex' flexDirection="column" alignItems='self-start' position="relative" gap={0} >
                            <Text color="#0466C8">This Month</Text>

                            <Box alignSelf='flex-start' display='absolute' border="" borderBottomWidth={4} h={0} w={8} bottom={0} borderColor='#0466C8' />
                        </Box>
                    </Box>
                    <Image src='three-dots.svg' />
                </Box>

                <Box display='flex' alignItems='center' justifyContent='center' m="20px 0">
                    <Image src='progress.svg' />
                </Box>

                <Box display='flex' flexDirection="column" alignItems='center' gap={2} m="30px">
                    <Text color="#707480" fontSize='14px' lineHeight='20.3px'>Amount spent so far</Text>
                    <Box display='flex' alignItems='center'>
                        <Text color="#0266C8" fontSize="16px" lineHeight="30.5px">₦50,000/</Text>

                        <Text color="#67A2DC" fontSize="16px" lineHeight="30.5px">₦120,000</Text>
                    </Box>
                </Box>

                <Box display='flex' alignItems='center' m="20px 0">
                    <Text color="#001233" fontSize='21px' fontWeight="500" lineHeight='24px'>Category Breakdown</Text>
                </Box>

                <Flex m="20px 0" flexDirection="row" justifyContent='space-between'>
                    <Flex flexDirection='row' gap='4' alignItems='center' flexWrap='wrap'>
                        <Image src='food-drink.svg' />
                        <Box display='flex' flexDirection="column" alignItems='start'>
                            <Text color="#001233" fontSize="16px">Food and Drink</Text>
                            <Text color="#707480" fontSize="16px">40%</Text>
                        </Box>
                    </Flex>

                    <Box display='flex' alignItems='start'>
                        <Text color="##001233" fontSize="16px" lineHeight="30.5px">₦50,000/</Text>

                        <Text color="#707480" fontSize="16px" lineHeight="30.5px">₦120,000</Text>
                    </Box>
                </Flex>

                <Flex m="20px 0" flexDirection="row" justifyContent='space-between'>
                    <Flex flexDirection='row' gap='4' alignItems='center' flexWrap='wrap'>
                        <Image src='savings.svg' />
                        <Box display='flex' flexDirection="column" alignItems='start'>
                            <Text color="#001233" fontSize="16px">Food and Drink</Text>
                            <Text color="#707480" fontSize="16px">40%</Text>
                        </Box>
                    </Flex>

                    <Box display='flex' alignItems='start'>
                        <Text color="##001233" fontSize="16px" lineHeight="30.5px">₦50,000/</Text>

                        <Text color="#707480" fontSize="16px" lineHeight="30.5px">₦120,000</Text>
                    </Box>
                </Flex>
            </Box>
            <BottonTabs />
        </>
    )
}

export default Page