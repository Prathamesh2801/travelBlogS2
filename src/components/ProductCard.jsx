import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

export default function ProductCard({ name, price, onView }) {
  return (
    <Card className="h-100">
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText className="flex-grow-1">Price: ${price}</CardText>
        <Button onClick={() => onView(name)}>View</Button>
      </CardBody>
    </Card>
  )
}
