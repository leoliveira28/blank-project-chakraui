import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';
  
  // Replace test data with your own
  const features = 
  [  {
      id: 1,
      title: 'Assessoria contabil',
      text: 'Relatórios contábeis mensais para leh ajudar com foco gerencial para lhe ajudar na tomada de decisões',
    },
    {
        id: 2,
        title: 'Assessoria tributária',
        text: 'Analisamos o melhor regime tributário para sua empresa ter a maior eficiência tributária possível',
      },
      {
        id: 3,
        title: 'Assessoria trabalhista',
        text: 'Acompanhamos de perto de negócio com foco na redução de riscos trabalhistas e previdenciários',
      },
      {
        id: 1,
        title: 'Assessoria contabil',
        text: 'Relatórios contábeis mensais para leh ajudar com foco gerencial para lhe ajudar na tomada de decisões',
      },
      {
          id: 2,
          title: 'Assessoria tributária',
          text: 'Analisamos o melhor regime tributário para sua empresa ter a maior eficiência tributária possível',
        },
        {
          id: 3,
          title: 'Assessoria trabalhista',
          text: 'Acompanhamos de perto de negócio com foco na redução de riscos trabalhistas e previdenciários',
        }
  ]
  
  export default function GridListWithHeading() {
    return (
      <Box p={4}
      mt={'100px'}
      h={'100vh'}
      >
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Gaspi Contabilidade</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Nosso escritório de contabilidade em São José do Rio Preto e através da internet
            oferecemos diversos serviços para nossos clientes,
            como abertura de empresa, assessoria contábil, assessoria fiscal e trabalhista.
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }