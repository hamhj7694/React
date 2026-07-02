import { useState } from "react"

function PostWriteImage({
    images,
    handleImageChange,
    handleRemoveImage,
}){
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageClick = (image) => {
        setSelectedImage(image)
    }

    const handleClosePreview = () => {
        setSelectedImage(null)
    }

    return(
        <>
            <div className="PostWrite_section">
                <label className="PostWrite_field_label">사진</label>

                <label className="PostWrite_image_upload">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />

                    <span>+ 사진 추가</span>
                </label>

                {images.length > 0 && (
                    <div className="PostWrite_image_preview">
                        {images.map((image) => (
                            <div className="PostWrite_image_item" key={image.id}>
                                <button
                                    type="button"
                                    className="PostWrite_image_thumb"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img src={image.url} alt={image.name} />
                                </button>

                                <button
                                    type="button"
                                    className="PostWrite_image_remove"
                                    onClick={() => handleRemoveImage(image.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedImage && (
                <div 
                    className="PostWrite_image_overlay"
                    onClick={handleClosePreview}
                >
                    <div 
                        className="PostWrite_image_modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="PostWrite_image_close"
                            onClick={handleClosePreview}
                        >
                            ×
                        </button>

                        <img 
                            src={selectedImage.url} 
                            alt={selectedImage.name} 
                        />

                        <p>{selectedImage.name}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostWriteImage