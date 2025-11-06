import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Trash2 } from 'lucide-react';

interface FilterCondition {
  id: string;
  field: string;
  operator: string;
  value: string;
}

const Segment = () => {
  const [segmentName, setSegmentName] = useState('');
  const [description, setDescription] = useState('');
  const [conditions, setConditions] = useState<FilterCondition[]>([
    { id: '1', field: '', operator: '', value: '' }
  ]);

  const addCondition = () => {
    setConditions([
      ...conditions,
      { id: Date.now().toString(), field: '', operator: '', value: '' }
    ]);
  };

  const removeCondition = (id: string) => {
    if (conditions.length > 1) {
      setConditions(conditions.filter(c => c.id !== id));
    }
  };

  const updateCondition = (id: string, field: keyof FilterCondition, value: string) => {
    setConditions(conditions.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const handleSave = () => {
    console.log('Saving segment:', { segmentName, description, conditions });
  };

  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Create Segment</h1>

      <Card>
        <CardHeader>
          <CardTitle>Segment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="segmentName">Segment Name</Label>
            <Input
              id="segmentName"
              value={segmentName}
              onChange={(e) => setSegmentName(e.target.value)}
              placeholder="Enter segment name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter segment description"
              rows={4}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Filter Conditions</Label>
              <Button onClick={addCondition} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Row
              </Button>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30%]">Field</TableHead>
                    <TableHead className="w-[25%]">Operator</TableHead>
                    <TableHead className="w-[35%]">Value</TableHead>
                    <TableHead className="w-[10%]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {conditions.map((condition) => (
                    <TableRow key={condition.id}>
                      <TableCell>
                        <Select
                          value={condition.field}
                          onValueChange={(value) => updateCondition(condition.id, 'field', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="age">Age</SelectItem>
                            <SelectItem value="location">Location</SelectItem>
                            <SelectItem value="purchase-count">Purchase Count</SelectItem>
                            <SelectItem value="total-spent">Total Spent</SelectItem>
                            <SelectItem value="last-active">Last Active</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={condition.operator}
                          onValueChange={(value) => updateCondition(condition.id, 'operator', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select operator" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="equals">Equals</SelectItem>
                            <SelectItem value="not-equals">Not Equals</SelectItem>
                            <SelectItem value="greater-than">Greater Than</SelectItem>
                            <SelectItem value="less-than">Less Than</SelectItem>
                            <SelectItem value="contains">Contains</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          value={condition.value}
                          onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                          placeholder="Enter value"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => removeCondition(condition.id)}
                          variant="ghost"
                          size="icon"
                          disabled={conditions.length === 1}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave}>Save Segment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Segment;
