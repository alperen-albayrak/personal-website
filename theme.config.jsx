/* eslint-disable import/no-anonymous-default-export */
export default {
    components: {
        h1: ({ children }) => (
            <h1 style={{
                // '-webkit-background-clip': 'text',
                // '-webkit-text-fill-color': 'transparent',
                // backgroundClip: 'text',
                // backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080);',
            }}
            >
                {/* {children => (children == "About") ? 'Alperen Albayrak' : children} */}
                {children}
            </h1>
        )
    },


    footer: (
        <small style={{ display: 'block', marginTop: '8rem' }}>
            {new Date().getFullYear()} © Alperen Albayrak.
            <a href="/feed.xml">RSS</a>
            <style jsx>{`
            a {
              float: right;
            }
    
            @media screen and (max-width: 480px) {
              article {
                padding-top: 2rem;
                padding-bottom: 4rem;
              }
            }
          `}</style>
        </small>
    ),
    head: ({ title, meta }) => (
        <>
            {meta.description && (<meta name="description" content={meta.description} />)}
            {meta.tag && <meta name="keywords" content={meta.tag} />}
            {meta.author && <meta name="author" content={meta.author} />}
            {meta.author && <meta name="author" content={meta.author} />}
        </>
    ),
    readMore: 'Read More →',
    postFooter: null,
    darkMode: true,
    navs: [
        // {
        //     url: 'https://github.com/shuding/nextra',
        //     name: 'Nextra'
        // }
    ]
}