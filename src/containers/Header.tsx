// components
import Wrapper from 'components/header/Wrapper'
import Layout, { AutoLayout } from 'components/header/Layout'
import Logo from 'components/header/Logo'
import ControlBtn from 'components/header/ControlBtn'
import { useState } from 'react'

const Header = ({
  onNavToggle, 
  onOptionToggle, 
  onLearningToggle
}: Props) => {
  const [closed, setIsClosed] = useState(false)

  return (
    <Wrapper>
      <Layout isClosed={closed}>
        <AutoLayout>
          {/* 
          // @ts-ignore */}
          <Logo />
          <div>
              <ControlBtn message="close" onClick={() => setIsClosed(true)} />
            <ControlBtn message="Contents" onClick={onNavToggle} />
            <ControlBtn message="Setting" onClick={onOptionToggle} />
            <ControlBtn message="Highlights" onClick={onLearningToggle} />
          </div>
        </AutoLayout>
      </Layout>
    </Wrapper>
  );
}

interface Props {
  onNavToggle: (value?: boolean) => void;
  onOptionToggle: (value?: boolean) => void;
  onLearningToggle: (value?: boolean) => void;
}

export default Header