import { Button, Row, Col } from "antd";

interface DrawerFooterProps {
    onCancel: () => void;
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({ onCancel }) => {
    return (
        <Row justify="space-between">
            <Col>
                <Button type='default' onClick={onCancel}>Cancelar</Button>
            </Col>
            <Col>
                <Button type='primary'>Guardar</Button>
            </Col>
        </Row>
    )
};

export default DrawerFooter;
