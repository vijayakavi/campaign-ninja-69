import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CreateCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: '',
    campaignType: '',
    toolId: '',
    campaignName: '',
    campaignDescription: '',
    segment: '',
    bucketGroup: '',
  });

  const steps = [
    { number: 1, name: 'Segment' },
    { number: 2, name: 'Setup' },
    { number: 3, name: 'Communication' },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Campaign Creation</h1>

      {/* Steps Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                    currentStep === step.number
                      ? "bg-primary text-primary-foreground"
                      : currentStep > step.number
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.number}
                </div>
                <span
                  className={cn(
                    "mt-2 text-sm font-medium",
                    currentStep === step.number
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="mx-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Segment */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Base Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="userType">User Type</Label>
                  <Select
                    value={formData.userType}
                    onValueChange={(value) => handleInputChange('userType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Users</SelectItem>
                      <SelectItem value="existing">Existing Users</SelectItem>
                      <SelectItem value="premium">Premium Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaignType">Campaign Type</Label>
                  <Select
                    value={formData.campaignType}
                    onValueChange={(value) => handleInputChange('campaignType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="transactional">Transactional</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="toolId">Tool ID</Label>
                <Input
                  id="toolId"
                  value={formData.toolId}
                  onChange={(e) => handleInputChange('toolId', e.target.value)}
                  placeholder="Enter tool ID"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaignName">Campaign Name</Label>
                <Input
                  id="campaignName"
                  value={formData.campaignName}
                  onChange={(e) => handleInputChange('campaignName', e.target.value)}
                  placeholder="Enter campaign name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaignDescription">Campaign Description</Label>
                <Textarea
                  id="campaignDescription"
                  value={formData.campaignDescription}
                  onChange={(e) => handleInputChange('campaignDescription', e.target.value)}
                  placeholder="Enter campaign description"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Target Customers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="segment">Segment</Label>
                  <Select
                    value={formData.segment}
                    onValueChange={(value) => handleInputChange('segment', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-value">High Value</SelectItem>
                      <SelectItem value="medium-value">Medium Value</SelectItem>
                      <SelectItem value="low-value">Low Value</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bucketGroup">Bucket Group</Label>
                  <Select
                    value={formData.bucketGroup}
                    onValueChange={(value) => handleInputChange('bucketGroup', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select bucket group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="group-a">Group A</SelectItem>
                      <SelectItem value="group-b">Group B</SelectItem>
                      <SelectItem value="group-c">Group C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 2: Setup */}
      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Campaign Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Setup configuration options will be available here.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Communication */}
      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Communication Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Communication template and notification settings will be configured here.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          variant="outline"
        >
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === 3}>
          {currentStep === 3 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default CreateCampaign;
