// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  BlockQuote,
  Quote,
  Cite,
  CodeBlock,
  Code,
  List,
  ListItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import reactNativeMobileSrc from './assets/mobile.jpg';
import reactLoveSrc from './assets/reactLove.png';
import formidableWhite from './assets/formidableWhite.png';
import formidableBlack from './assets/formidableBlack.png';
import formidableRed from './assets/formidableRed.png';
import iosEcosystem from './assets/iosEcosystem.png';
import androidEcosystem from './assets/androidEcosystem.png';
import welcomeToReact from './assets/welcomeToReact.png';
import welcomeToReactCode from './assets/welcomeToReactCode.png';
import welcomeToReactNative from './assets/welcomeToReactNative.jpeg';
import welcomeToReactNativeCode from './assets/welcomeToReactNativeCode.png';
import platformSpecificFile from './assets/platformSpecificFile.png';
import platformSpecificVar from './assets/platformSpecificVar.png';
import sewerClown from './assets/sewerClown.jpg';
import imageSizes from './assets/imageSizes.png';
import expoQRCode from './assets/expoQRCode.png';
import expo from './assets/expo.png';
import magic from './assets/magic.gif';

import rnLogo from './assets/react-native-logo.png';
import crossPlatform from './assets/cross-platform.png';
import oldArch from './assets/old-arch.png';
import newArch from './assets/new-arch.png';
import meme from './assets/meme.jpg';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    black: '#1F2022',
    christmasRed: '#c43a33',
    christmasYellow: '#C5A436',
    christmasGreen: '#176100',
    white: '#FFFFFF',
    blue: '#10a3de',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const NormalHeading = ({ children }) => (
  <Heading size={4} textColor="white">
    {children}
  </Heading>
);

const Logo = () => <Image src={rnLogo} />;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="black">
          <Heading fit caps textColor="white">
            React Native - Nova Arquitetura
          </Heading>
          <Text textColor="christmasRed" bold>
            (O que muda?)
          </Text>
          <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Text textColor="white">Emerson Vieira</Text>
            {/* <Text textColor="white">Polibras Software</Text> */}
          </div>
          <Logo />
        </Slide>
        <Slide bgColor="black">
          <Heading fit textColor="white">
            O que é React Native?
          </Heading>
          <Image src={rnLogo} />
        </Slide>
        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              Um framework para construir aplicativos nativos usando React
            </Quote>
            <Cite>React Native Docs</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="black">
          <Image src={iosEcosystem} />
        </Slide>
        <Slide bgColor="black">
          <Image src={androidEcosystem} />
        </Slide>
        <Slide bgColor="black">
          <Image src={crossPlatform} />
        </Slide>
        <Slide bgColor="black" textColor="white">
            <NormalHeading>Crie uma vez, execute em qualquer lugar</NormalHeading>
        </Slide>
        <Slide bgColor="black">
          <Image src={magic} width="600px"/>
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="white">Como?</Heading>
          <Text textColor="white" bold>
            Ao mapear cada elemento para suas contrapartes nativas
          </Text>
        </Slide>
        <Slide bgColor="black">
          <NormalHeading>Arquitetura Atual</NormalHeading>
          <Text textColor="white" bold>
            Pilares principais
          </Text>
        </Slide>
        <Slide bgColor="black">
          <Text textColor="white" bold>
          1)Javascript Thread <br />

          2)Native/UI Thread <br />

          3)Layout Thread/Shadow Thread <br />

          4)Bridge
          </Text>
        </Slide>
        {/* <Slide bgColor="christmasRed" textColor="white">
            <NormalHeading>How easy is it really to get started?</NormalHeading>
            </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <Code textColor="white">yarn global add create-react-app</Code>
          <Text />
          <Code textColor="white">create-react-app my-app</Code>
          <Text />
          <Code textColor="white">cd my-app/</Code>
          <Text />
          <Code textColor="white">yarn start</Code>
        </Slide> 
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReact} />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactCode} />
        </Slide>
        <Slide bgColor="white">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="black">
              Expo - React Native toolchain
            </Heading>
          </div>
          <Image src={expo} />
        </Slide>
        <Slide bgColor="christmasRed">
          <Code textColor="white">yarn global add create-react-native-app</Code>
          <Text />
          <Code textColor="white">create-react-native-app my-app</Code>
          <Text />
          <Code textColor="white">cd my-app/</Code>
          <Text />
          <Code textColor="white">yarn start</Code>
        </Slide>
        <Slide bgColor="black">
          <Image src={expoQRCode} width="50%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactNative} width="40%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactNativeCode} width="70%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Heading fit textColor="white">
            Differences in styling
          </Heading>
          <List textColor="white">
            <ListItem>Inline styles (use styled components! 💅)</ListItem>
            <ListItem>FlexBox for positioning</ListItem>
          </List>
        </Slide>
        <Slide bgColor="blue">
          <Heading fit textColor="white">
            Differences in syntax
          </Heading>
          <List textColor="white">
            <ListItem>View instead of div</ListItem>
            <ListItem>No buttons: touchables instead</ListItem>
            <ListItem>No onClick: onPress instead</ListItem>
            <ListItem>Text elements must be in {`<Text>`}</ListItem>
          </List>
        </Slide>
        <Slide bgColor="christmasYellow">
          <Heading fit textColor="white">
            Differences in environment
          </Heading>
          <List textColor="white">
            <ListItem>CAN use any JS modules</ListItem>
            <ListItem>localStorage vs AsyncStorage</ListItem>
            <ListItem>MUST worry about the keyboard</ListItem>
            <ListItem>MUST worry about "working offline"</ListItem>
          </List>
        </Slide> */}
        {/* TODO: slide about border radius/shadow  */}
        {/* <Slide bgColor="christmasRed">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={platformSpecificVar} />
        </Slide> */}
        {/* TODO: slide about flasy toggle button  */}
        {/* <Slide bgColor="christmasRed">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={platformSpecificFile} />
        </Slide>
        <Slide bgColor="christmasYellow">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={imageSizes} />
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>Why React Native?</NormalHeading>
          <Image src={reactNativeMobileSrc} />
        </Slide>
        <Slide bgColor="black" textColor="white">
            <NormalHeading>Build once, run anywhere</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>The JavaScript takeover</NormalHeading>
        </Slide>
        <Slide bgColor="christmasGreen" textColor="white">
          <NormalHeading>
            Publish new versions of native apps as quickly as webapps
          </NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>
            Can I be a React Native developer, without ever having to touch
            Native code?
          </NormalHeading>
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading size={4} textColor="white">
            Hey kid, you can write JS on Mobile here
          </Heading>
          <Image src={sewerClown} />

        </Slide>
        <Slide bgColor="blue" textColor="white">
          <Heading size={4} textColor="white">
          Am I saying you should drop everything and go build some React Native apps?
          </Heading>
        </Slide> */}

        <Slide bgColor="black">
          <Heading fit textColor="white">
            Arquitetura Atual
          </Heading>
          <Image src={oldArch} />
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Javascript Thread
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          Ao usar o mecanismo javascript, é responsável pelas execuções do pacote javascript.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Native/UI Thread
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          Para lidar com tarefas como renderização de UI e eventos do usuário, é responsável por executar os módulos nativos.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Layout Thread/Shadow Thread
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          Antes de renderizar os elementos na tela do host, o layout dos elementos é calculado neste thread de fundo.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Bridge
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          A Ponte no React Native é um mecanismo que facilita a comunicação entre a thread JavaScript e os módulos nativos que estão sendo executados na thread principal da plataforma host (Android ou iOS) <br />
          A ponte recebe o pacote JavaScript da thread JavaScript e, com base nos requisitos da lógica JavaScript, se comunica com o código nativo para executar a funcionalidade nativa
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading>Arquitetual Atual</NormalHeading>
          <Text textColor="white" bold>
            O problema da Ponte/Bridge
          </Text>
        </Slide>

        <Slide bgColor="black">
          <Text textColor="white" bold>
          Entender que toda interação no React Native, desde eventos até atualizações de tela, exige que os dados sejam serializados, passados ​
          ​pela Bridge e depois desserializados — de maneira assíncrona — nos leva ao cerne da questão: desempenho. 
          </Text>
        </Slide>

        <Slide bgColor="black">
          <Text textColor="white" bold>
          Considere um cenário em que seu aplicativo precisa exibir uma grande quantidade de dados, atualizando-se constantemente em resposta a diversos eventos. 
          Nesta situação, a Ponte torna-se um gargalo. O processo de serialização, transmissão e desserialização de grandes quantidades de dados pode levar a atrasos perceptíveis. 
          O resultado? Sua tela pode ficar temporariamente em branco durante atualizações pesadas de dados, um claro indicador de tensão no desempenho da arquitetura Bridge.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading>Nova Arquitetura</NormalHeading>
          <Text textColor="white" bold>
          Pilares principais
          </Text>
        </Slide>

        <Slide bgColor="black">
          <Text textColor="white" bold>
          1) JSI (JavaScript Interface) <br />

          2)Fabric <br />

          3)Turbo Modules <br />

          4)Codegen <br />
          </Text>
        </Slide>

        <Slide bgColor="black">
          <Heading fit textColor="white">
            Nova Arquitetura
          </Heading>
          <Image src={newArch} />
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          JSI (JavaScript Interface)
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          O JSI ou Javascript Interface é a camada que substituirá completamente o Bridge. 
          O objetivo principal é tornar os lados Javascript e Nativo conscientes um do outro e capazes de se comunicarem sem a etapa extra que é a Ponte/Bridge.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Fabric
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          A nova engine de renderização que promete melhorar significativamente o desempenho dos aplicativos. 
          O Fabric otimiza a comunicação entre o JavaScript e o nativo, reduzindo a sobrecarga e melhorando a eficiência da renderização. 
          Com essa inovação, o React Native avança para uma experiência de usuário ainda mais fluída e responsiva, aproximando-se do desempenho dos aplicativos nativos.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Turbo Modules
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          Os Módulos Turbo são uma evolução do sistema de módulos nativos do React Native. 
          Eles visam aumentar a eficiência do carregamento e execução do módulo nativo. 
          Com Turbo Modules, a inicialização de módulos nativos é mais rápida, 
          resultando em melhores tempos de inicialização para sua aplicação. 
          Essa adição arquitetônica ajuda a manter a integração perfeita da funcionalidade nativa em seu aplicativo React Native, mantendo o desempenho em mente.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Codegen
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          Codegen é um mecanismo que gera informações de tipo estático para a ponte JavaScript para nativo. 
          Isso permite melhor verificação de tipo e preenchimento automático em seu IDE, tornando seu processo de desenvolvimento mais robusto e livre de erros.
           Ao detectar problemas relacionados ao tipo durante o desenvolvimento, o Codegen contribui para reduzir erros de tempo de execução e melhorar a estabilidade de seus aplicativos React Native.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Benefícios da Nova Arquitetura - I
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          A Nova Arquitetura melhorou as coisas ao dizer adeus à velha Ponte e dar as boas-vindas a uma nova maneira de diferentes partes do aplicativo se comunicarem entre si. 
          Eles introduziram o JavaScript Interface (JSI), que permite que JavaScript e C++ se entendam. 
          Facilita que um objeto JavaScript mantenha uma referência a um C++ e vice-versa.
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Benefícios da Nova Arquitetura - II
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          - Agora é possível executar funções de forma síncrona que, em primeiro lugar, não deveriam ser assíncronas. <br />
          - Antes, eles tinham que empacotar e desempacotar as informações cada vez que conversavam. Agora, eles podem simplesmente compartilhar informações sem passar por todos esses problemas, ou seja, a Nova Arquitetura não precisa mais serializar/desserializar os dados
          </Text>
        </Slide>

        <Slide bgColor="black">
          <NormalHeading textColor="christmasRed">
          Benefícios da Nova Arquitetura - III
          </NormalHeading>
          <Text textColor="christmasRed" bold>
          - Para transporte de dados, o JSI substituirá o Bridge. <br />
          - Threads nativos e JavaScript podem se comunicar diretamente entre si. <br />
          - Quando necessário, os Módulos Turbo podem ser carregados. <br />
          - Renderização suave <br />
          - Verificação de tipo estático para garantir compatibilidade entre Native e JS. <br />
          - Tarefas urgentes podem ser realizadas de forma síncrona.
          </Text>
        </Slide>

        <Slide bgColor="black" textColor="white">
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Obrigado!
            </Heading>
            <Image src={meme} />
          </div>
          
          {/* <div style={{ marginBottom: '100px' }}>
          <Heading size={4} textColor="white">
            Happy Holidays! 🎄
          </Heading>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Text textColor="white" fit>Google: "React Native getting started"</Text>
          </div>
          <Text textColor="white" fit>https://facebook.github.io/react-native/docs/getting-started.html</Text> */}
        </Slide>
      </Deck>
    );
  }
}
