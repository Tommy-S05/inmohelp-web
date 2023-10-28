'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Divider} from "@nextui-org/divider";
import {useEffect, useRef, useState} from "react";

export default function PropertyDescription({description}) {
    const [readMore, setReadMore] = useState(false);
    const [readMoreText, setReadMoreText] = useState('Leer más');
    const [readMoreClass, setReadMoreClass] = useState('line-clamp-6');
    const [showReadMoreButton, setShowReadMoreButton] = useState(false);
    const descriptionRef = useRef(null);
    
    useEffect(() => {
        if(descriptionRef.current) {
            setShowReadMoreButton(descriptionRef.current.clientHeight !== descriptionRef.current.scrollHeight);
        }
    }, [description]);
    
    const handleReadMore = () => {
        if(readMore) {
            setReadMoreText('Leer más');
            setReadMoreClass('line-clamp-6');
        } else {
            setReadMoreText('Leer menos');
            setReadMoreClass('line-clamp-none');
        }
        setReadMore(!readMore);
    }
    
    return (
        <Card className={'xl:p-3 p-2'}>
            <CardHeader>
                <h1 className={'text-2xl font-bold text-primary'}>
                    Descripción
                </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                <div
                    ref={descriptionRef}
                    className={`${readMoreClass}`}
                >
                    {description}
                </div>
            </CardBody>
            {
                showReadMoreButton && (
                    <>
                        <Divider/>
                        <CardFooter>
                            <Button
                                type={'button'}
                                color={'secondary'}
                                variant={'light'}
                                onClick={handleReadMore}
                            >
                                {readMoreText}
                            </Button>
                        </CardFooter>
                    </>
                )
            }
        </Card>
    )
}