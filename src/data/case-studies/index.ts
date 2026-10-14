import type { CaseStudy } from '../../types/case-study';
import { synxStore } from './synx-store';
import { brandPositioningStrategy } from './brand-positioning-strategy';
import { integratedMarketingCampaign } from './integrated-marketing-campaign';
import { productLaunchGoToMarket } from './product-launch-go-to-market';

/**
 * All case studies, indexed by slug.
 * To add a new case study:
 * 1. Create a new file in this directory
 * 2. Import it here
 * 3. Add it to the caseStudies object below
 */
export const caseStudies: Record<string, CaseStudy> = {
  'synx-store': synxStore,
  'brand-positioning-strategy': brandPositioningStrategy,
  'integrated-marketing-campaign': integratedMarketingCampaign,
  'product-launch-go-to-market': productLaunchGoToMarket,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
