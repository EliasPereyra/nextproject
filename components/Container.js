import Head from 'next/head'
import Navigation from '../components/navigation'

const Container = (props) => (
    <div>
        <Head>
            <title>Nextjs Project</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossorigin="anonymous"></link>
        </Head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>
    </div>
)

export default Container