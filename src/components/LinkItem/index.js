import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem( { closeModal, contentUrl } ){

    async function copyLink(){
        await navigator.clipboard.writeText(contentUrl.link)
    }

    return(
        <div className='container-modal'>
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                {contentUrl.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {contentUrl.link}
                <FiClipboard size={20} color='#FFF' />
            </button>
        </div>
    )
}