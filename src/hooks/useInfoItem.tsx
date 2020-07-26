import React from "react";
import {Button, Card, Col, Modal} from "antd";

type UseInfoItemPropsT = {
    thumbRender: () => React.ReactNode,
    detailRender: () => React.ReactNode,
    header: string | React.ReactNode,
    visible: boolean,
    setVisible: (visible: boolean) => any
}

export const useInfoItem = ({thumbRender, detailRender, header, setVisible, visible}: UseInfoItemPropsT) => {

    return (
        <>
            <Col span={5} className='film-item'>
                <Card
                    className='film-card'
                    title={<strong>{header}</strong>}
                    actions={[<Button block type="link" onClick={() => setVisible(true)}>Детальнее</Button>]}
                >
                    {
                        thumbRender()
                    }
                </Card>
            </Col>

            {
                visible && <Modal
                    width='90%'
                    title={header}
                    visible={visible}
                    onCancel={ () => setVisible(false)}
                    footer={null}
                >
                    {detailRender()}
                </Modal>
            }
        </>
    )
}
