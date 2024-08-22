import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Udyavara Uday Shankar'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://udayshankar3953.github.io/Portifolio/">https://udayshankar3953.github.io/Portifolio/</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/UdayShankar3953">
            https://github.com/UdayShankar3953
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://udayshankar3953.github.io/Portifolio/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
