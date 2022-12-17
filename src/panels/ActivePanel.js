import React from 'react';
import {Banner, Button, Group, Header} from "@vkontakte/vkui";

const ActivePanel = props => {
    return (
        <Group header={<Header>Mode: image, size: regular</Header>}>
            <Banner
                mode="image"
                header="Мои достижения"
                subheader="Разблокировано 9 из 36"
                background={
                    <div
                        style={{
                            backgroundColor: "#65c063",
                            backgroundImage:
                                "url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",
                            backgroundPosition: "right bottom",
                            backgroundSize: 320,
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                }
                actions={<Button appearance="overlay">Подробнее</Button>}
            />
        </Group>
    )
}

export default ActivePanel



