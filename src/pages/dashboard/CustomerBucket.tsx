import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CustomerBucket = () => {
  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Customer Bucket</h1>

      <Card>
        <CardHeader>
          <CardTitle>Manage Customer Buckets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Customer bucket management interface will be implemented here. 
            This section will allow you to organize and categorize customers into different groups.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerBucket;
