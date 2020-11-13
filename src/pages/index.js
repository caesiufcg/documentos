import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Documentos CAESI',
    imageUrl: 'img/docs-image.svg',
    description: (
      <>
        Esta é a página de documentos do CAESI. 
        Aqui você vai encontrar os documentos públicos das gestões do Centro Acadêmico desde 2018, 
        tais como o nosso estatuto, atas de assembleias, atas de posse, etc. 
        É muito importante todos os estudantes do curso conhecerem esses documentos, 
        que registram acontecimentos e regulamentam o que acontece no nosso Centro Acadêmico.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.presentation}>
      <div>
        {imgUrl && (
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        )}
      </div>
      <div className={styles.information}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--outline button--lg ',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/gestao')}>
              Nosso Estatuto
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={/*`Hello from ${siteConfig.title}`*/'CAESI'}
      description="Description will go into a meta tag in <head />">
      <main>
        {features && features.length > 0 && (
          <section className={styles.display}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;