import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Segment = () => {
  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Segment</h1>

      <Card>
        <CardHeader>
          <CardTitle>Customer Segmentation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Segment management interface will be implemented here. 
            Create and manage customer segments based on various criteria.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Segment;
