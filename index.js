import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '/components/ui/card';
import { Input } from '/components/ui/input';
import { Label } from '/components/ui/label';
import { Button } from '/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '/components/ui/radio-group';

const PerformanceReport = () => {
  const [reportType, setReportType] = useState('weekly');
  const [timePeriod, setTimePeriod] = useState('last-week');
  const [department, setDepartment] = useState('all');

  const handleGenerateReport = () => {
    alert(
      `Generating ${reportType} report for ${timePeriod} in ${department} department.`
    );
  };

  return (
    <div className="p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Performance Report</CardTitle>
          <CardDescription>
            Generate a performance report based on your criteria.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reportType">Report Type</Label>
            <RadioGroup defaultValue="weekly" onValueChange={setReportType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">Weekly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yearly" id="yearly" />
                <Label htmlFor="yearly">Yearly</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timePeriod">Time Period</Label>
            <Select onValueChange={setTimePeriod}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select onValueChange={setDepartment}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="customFilter">Custom Filter</Label>
            <Input id="customFilter" placeholder="Enter custom filter" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleGenerateReport}>Generate Report</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PerformanceReport;
