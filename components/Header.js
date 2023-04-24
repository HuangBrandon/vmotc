import Image from 'next/image'

function Header() {
    return(
        <div className="layout-header">
            <title>Tippecanoe Memories</title>
            <Image
              src="/PU-H-Full-Rev-RGB.svg"
              alt="Purdue Logo"
              width={100}
              height={24}
            />Links and stuff
        </div>
    )
}

export default Header