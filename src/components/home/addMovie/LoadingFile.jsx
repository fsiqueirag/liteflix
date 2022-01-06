import React, { useEffect, useState } from 'react';
import { finishUploadingFile, movieUploaded, uploadFailed } from '../../../actions/addMovie';
import { useIsMounted } from '../../../hooks/useIsMounted';

export const LoadingFile = ({ dispatch, setNewMovie, newImage, newMovie }) => {

    const isMounted = useIsMounted();
    const [percentage, setPercentage] = useState(1);
    const [percentageFinished, setPercentageFinished] = useState(false);

    useEffect(() => {
        const percentageInterval = setInterval(() => {
            setPercentage(percentage => percentage + 1)
        }, 10);

        (
            async () => {
                if (newImage) {
                    const cloudUrl = 'https://api.cloudinary.com/v1_1/daw042cxz/upload';

                    const formData = new FormData();
                    formData.append('upload_preset', 'liteflix');
                    formData.append('file', newImage);

                    try {
                        const res = await fetch(cloudUrl, {
                            method: 'POST',
                            body: formData
                        });

                        if (res.ok) {
                            const cloudRes = await res.json();

                            if (isMounted()) {
                                setNewMovie({
                                    ...newMovie,
                                    imageUrl: cloudRes.secure_url
                                });
                                setPercentageFinished(true);

                                setTimeout(() => {
                                    if (isMounted()) {
                                        dispatch(movieUploaded());
                                    }
                                }, 500);

                            }

                        } else {
                            throw await res.json();
                        }

                    } catch (error) {
                        console.error(error);
                        dispatch(uploadFailed());
                    }
                }
            }
        )();

        return () => {
            clearInterval(percentageInterval);
        }
    }, [dispatch, isMounted, newImage, newMovie, setNewMovie])


    const handleCancel = () => {
        setNewMovie({
            imageUrl: '',
            title: ''
        });
        dispatch(finishUploadingFile());
    }

    const getPercentage = () => {
        const slicedPercentage = (5 * Math.log(percentage * 2)).toFixed(0);

        return percentageFinished ? 100 : slicedPercentage;
    }

    return (
        <div className="add-movie__loading-container">
            <p>Cargando <span>{getPercentage()}</span> %</p>
            <div className="add-movie__loading-bar-container">
                <div
                    className="add-movie__loading-bar"
                    style={{
                        width: `${getPercentage()}%`
                    }}
                />
            </div>
            <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
    )
}
