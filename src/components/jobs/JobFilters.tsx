import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';
import { jobDepartments, jobTypes, jobLocations } from '@/data/jobs';
import { useTranslation } from '@/contexts/TranslationContext';

interface JobFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
  selectedJobType: string;
  onJobTypeChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  jobCounts: {
    total: number;
    byDepartment: Record<string, number>;
    byJobType: Record<string, number>;
    byLocation: Record<string, number>;
  };
  onClearFilters: () => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedJobType,
  onJobTypeChange,
  selectedLocation,
  onLocationChange,
  jobCounts,
  onClearFilters
}) => {
  const { t } = useTranslation();
  
  const hasActiveFilters = selectedLocation !== 'all' || searchTerm;

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t('careers.jobs.search')}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger>
              <SelectValue placeholder={t('careers.jobs.filters.location')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {t('careers.jobs.filters.allLocations')} ({jobCounts.total})
              </SelectItem>
              {jobLocations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location} ({jobCounts.byLocation[location] || 0})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="icon"
            onClick={onClearFilters}
            className="shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{t('careers.jobs.filters.active')}:</span>
          
          {searchTerm && (
            <Badge variant="secondary" className="gap-1">
              "{searchTerm}"
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onSearchChange('')}
              />
            </Badge>
          )}
          
          {selectedLocation !== 'all' && (
            <Badge variant="secondary" className="gap-1">
              {selectedLocation}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onLocationChange('all')}
              />
            </Badge>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="h-auto p-1 text-xs text-muted-foreground"
          >
            {t('careers.jobs.filters.clearAll')}
          </Button>
        </div>
      )}

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        {jobCounts.total === 0 
          ? t('careers.jobs.noResults')
          : jobCounts.total === 1 
            ? t('careers.jobs.oneResult')
            : `${jobCounts.total} ${t('careers.jobs.resultsFound')}`
        }
      </div>
    </div>
  );
};

export default JobFilters;