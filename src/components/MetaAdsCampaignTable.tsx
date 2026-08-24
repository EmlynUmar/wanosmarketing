import React, { useState, useMemo } from 'react';
import { CaseStudy } from '../types';
import { ArrowUpDown, ArrowUp, ArrowDown, Sparkles } from 'lucide-react';

export interface AdSetRow {
  id: string;
  name?: string;
  addsToCart: number;
  costPerPurchase: number;
  amountSpent: number;
  purchases: number;
  roas: number;
  revenue: number;
  isHighlighted?: boolean;
}

interface MetaAdsCampaignTableProps {
  caseStudy: CaseStudy;
  className?: string;
}

const DEFAULT_BREAKDOWNS: Record<string, AdSetRow[]> = {
  'cs-1': [
    { id: '1', name: 'Broad Scale | Top Creative 01', addsToCart: 60416, costPerPurchase: 27.16, amountSpent: 134818.43, purchases: 4963, roas: 2.80, revenue: 377604.35 },
    { id: '2', name: 'Lookalike 1% - 3% Buyers', addsToCart: 5885, costPerPurchase: 20.86, amountSpent: 7299.86, purchases: 350, roas: 3.87, revenue: 28245.54 },
    { id: '3', name: 'Interest Stacks - E-Com High AOV', addsToCart: 2210, costPerPurchase: 42.62, amountSpent: 6520.57, purchases: 153, roas: 2.72, revenue: 17734.89 },
    { id: '4', name: 'Advantage+ Shopping Campaign (ASC)', addsToCart: 2008, costPerPurchase: 24.00, amountSpent: 2856.07, purchases: 119, roas: 3.31, revenue: 9450.88, isHighlighted: true },
    { id: '5', name: 'Dynamic Retargeting 7D View/Add', addsToCart: 827, costPerPurchase: 37.64, amountSpent: 4065.00, purchases: 108, roas: 1.78, revenue: 7250.47 },
    { id: '6', name: 'Video Views -> Instant Page Funnel', addsToCart: 919, costPerPurchase: 19.87, amountSpent: 3457.06, purchases: 174, roas: 1.95, revenue: 6735.74 },
    { id: '7', name: 'Catalog Carousel | Bestsellers', addsToCart: 468, costPerPurchase: 46.28, amountSpent: 1943.83, purchases: 42, roas: 3.03, revenue: 5888.30 },
    { id: '8', name: 'Retention & VIP Exclusives', addsToCart: 354, costPerPurchase: 48.34, amountSpent: 1595.37, purchases: 33, roas: 2.85, revenue: 4544.27 },
  ],
  'cs-2': [
    { id: '1', name: 'Scaling Hook V4 | Cold Broad', addsToCart: 7412, costPerPurchase: 26.14, amountSpent: 14218.40, purchases: 544, roas: 3.42, revenue: 48626.92 },
    { id: '2', name: 'Advantage+ Audience Testing', addsToCart: 2890, costPerPurchase: 29.80, amountSpent: 5364.00, purchases: 180, roas: 3.15, revenue: 16896.60 },
    { id: '3', name: 'UGC Creator Angle 02', addsToCart: 1420, costPerPurchase: 31.50, amountSpent: 2835.00, purchases: 90, roas: 3.10, revenue: 8788.50 },
    { id: '4', name: 'ASC Scale Set Alpha', addsToCart: 980, costPerPurchase: 28.12, amountSpent: 1462.24, purchases: 52, roas: 3.65, revenue: 5337.17, isHighlighted: true },
    { id: '5', name: 'Mid-Funnel Engage 30D', addsToCart: 310, costPerPurchase: 35.40, amountSpent: 495.60, purchases: 14, roas: 2.45, revenue: 1214.22 },
    { id: '6', name: 'Bottom Funnel 3D ATC', addsToCart: 180, costPerPurchase: 43.01, amountSpent: 860.26, purchases: 20, roas: 2.08, revenue: 1652.52 },
  ],
  'cs-3': [
    { id: '1', name: 'Collection Scaling | Broad', addsToCart: 4820, costPerPurchase: 27.10, amountSpent: 8943.00, purchases: 330, roas: 3.25, revenue: 29064.75 },
    { id: '2', name: 'Advantage+ High AOV Bundles', addsToCart: 1940, costPerPurchase: 29.40, amountSpent: 3528.00, purchases: 120, roas: 3.12, revenue: 11007.36 },
    { id: '3', name: 'Top Performing Video Ad 03', addsToCart: 950, costPerPurchase: 26.80, amountSpent: 1876.00, purchases: 70, roas: 3.40, revenue: 6378.40, isHighlighted: true },
    { id: '4', name: 'Dynamic Product Ads', addsToCart: 480, costPerPurchase: 36.10, amountSpent: 902.50, purchases: 25, roas: 2.48, revenue: 2238.20 },
    { id: '5', name: 'VIP Drop Retargeting', addsToCart: 210, costPerPurchase: 39.20, amountSpent: 549.18, purchases: 14, roas: 2.91, revenue: 1601.11 },
  ],
  'cs-4': [
    { id: '1', name: 'Drop Launch Hero Reel (Viral)', addsToCart: 1840, costPerPurchase: 2.85, amountSpent: 627.00, purchases: 220, roas: 36.80, revenue: 23073.60, isHighlighted: true },
    { id: '2', name: 'VIP Early Access List Expansion', addsToCart: 690, costPerPurchase: 3.10, amountSpent: 248.00, purchases: 80, roas: 32.50, revenue: 8060.00 },
    { id: '3', name: 'Instagram Story Blitz 24h', addsToCart: 320, costPerPurchase: 3.60, amountSpent: 108.00, purchases: 30, roas: 30.10, revenue: 3250.80 },
    { id: '4', name: 'Urgency / Last Chance ASC', addsToCart: 110, costPerPurchase: 3.57, amountSpent: 38.92, purchases: 11, roas: 26.35, revenue: 1025.60 },
  ]
};

type SortField = 'addsToCart' | 'costPerPurchase' | 'amountSpent' | 'purchases' | 'roas' | 'revenue';
type SortDirection = 'asc' | 'desc';

export const MetaAdsCampaignTable: React.FC<MetaAdsCampaignTableProps> = ({ caseStudy, className = '' }) => {
  const [sortField, setSortField] = useState<SortField>('revenue');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  // Retrieve or synthesize realistic breakdown rows
  const rawRows: AdSetRow[] = useMemo(() => {
    if (DEFAULT_BREAKDOWNS[caseStudy.id]) {
      return DEFAULT_BREAKDOWNS[caseStudy.id];
    }
    // Fallback synthesizer based on study metrics
    const totalSpend = caseStudy.adSpend || 1000;
    const totalRev = caseStudy.revenueGenerated || 3000;
    const totalPurchases = caseStudy.purchases || 100;
    const totalRoas = caseStudy.roas || 3.0;
    const totalAdds = Math.round(totalPurchases * 8.5);

    return [
      {
        id: '1',
        name: 'Primary Scaling Campaign',
        addsToCart: Math.round(totalAdds * 0.65),
        costPerPurchase: Number((totalSpend * 0.6 / (totalPurchases * 0.65)).toFixed(2)),
        amountSpent: Number((totalSpend * 0.60).toFixed(2)),
        purchases: Math.round(totalPurchases * 0.65),
        roas: Number((totalRoas * 1.05).toFixed(2)),
        revenue: Number((totalRev * 0.68).toFixed(2)),
        isHighlighted: true,
      },
      {
        id: '2',
        name: 'Broad Top-of-Funnel',
        addsToCart: Math.round(totalAdds * 0.22),
        costPerPurchase: Number((totalSpend * 0.25 / (totalPurchases * 0.22)).toFixed(2)),
        amountSpent: Number((totalSpend * 0.25).toFixed(2)),
        purchases: Math.round(totalPurchases * 0.22),
        roas: Number((totalRoas * 0.95).toFixed(2)),
        revenue: Number((totalRev * 0.21).toFixed(2)),
      },
      {
        id: '3',
        name: 'Retargeting 7-Day Window',
        addsToCart: Math.round(totalAdds * 0.13),
        costPerPurchase: Number((totalSpend * 0.15 / (totalPurchases * 0.13)).toFixed(2)),
        amountSpent: Number((totalSpend * 0.15).toFixed(2)),
        purchases: Math.round(totalPurchases * 0.13),
        roas: Number((totalRoas * 0.90).toFixed(2)),
        revenue: Number((totalRev * 0.11).toFixed(2)),
      }
    ];
  }, [caseStudy]);

  // Compute totals
  const totals = useMemo(() => {
    const totalAdds = rawRows.reduce((acc, r) => acc + r.addsToCart, 0);
    const totalSpent = rawRows.reduce((acc, r) => acc + r.amountSpent, 0);
    const totalPurchases = rawRows.reduce((acc, r) => acc + r.purchases, 0);
    const totalRev = rawRows.reduce((acc, r) => acc + r.revenue, 0);
    const avgCostPerPurchase = totalPurchases > 0 ? totalSpent / totalPurchases : 0;
    const avgRoas = totalSpent > 0 ? totalRev / totalSpent : 0;

    return {
      addsToCart: totalAdds,
      costPerPurchase: avgCostPerPurchase,
      amountSpent: totalSpent,
      purchases: totalPurchases,
      roas: avgRoas,
      revenue: totalRev
    };
  }, [rawRows]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedRows = useMemo(() => {
    return [...rawRows].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });
  }, [rawRows, sortField, sortDirection]);

  return (
    <div className={`w-full bg-white text-zinc-900 select-none overflow-hidden ${className}`}>
      {/* Scrollable Meta Ads Table Frame */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100">
        <table className="w-full min-w-[720px] sm:min-w-[860px] border-collapse text-left text-xs sm:text-sm font-sans">
          
          {/* Header */}
          <thead>
            <tr className="border-b border-zinc-200 bg-white">
              {/* Column 1: Adds to cart */}
              <th
                onClick={() => handleSort('addsToCart')}
                className="py-3.5 px-3 sm:px-4 cursor-pointer group hover:bg-zinc-50 border-r border-zinc-100/80 transition-colors w-[15%]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-zinc-800 text-xs sm:text-[13px] leading-tight block">
                    Adds to<br />cart
                  </span>
                  <div className="flex flex-col text-zinc-400 group-hover:text-zinc-700">
                    {sortField === 'addsToCart' ? (
                      sortDirection === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-blue-600" /> : <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    )}
                  </div>
                </div>
              </th>

              {/* Column 2: Cost per purchase */}
              <th
                onClick={() => handleSort('costPerPurchase')}
                className="py-3.5 px-3 sm:px-4 cursor-pointer group hover:bg-zinc-50 border-r border-zinc-100/80 transition-colors w-[17%]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-zinc-800 text-xs sm:text-[13px] leading-tight block">
                    Cost per<br />purchase
                  </span>
                  <div className="flex flex-col text-zinc-400 group-hover:text-zinc-700">
                    {sortField === 'costPerPurchase' ? (
                      sortDirection === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-blue-600" /> : <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    )}
                  </div>
                </div>
              </th>

              {/* Column 3: Amount spent */}
              <th
                onClick={() => handleSort('amountSpent')}
                className="py-3.5 px-3 sm:px-4 cursor-pointer group hover:bg-zinc-50 border-r border-zinc-100/80 transition-colors w-[17%]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-zinc-800 text-xs sm:text-[13px] leading-tight block">
                    Amount<br />spent
                  </span>
                  <div className="flex flex-col text-zinc-400 group-hover:text-zinc-700">
                    {sortField === 'amountSpent' ? (
                      sortDirection === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-blue-600" /> : <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    )}
                  </div>
                </div>
              </th>

              {/* Column 4: Purchases */}
              <th
                onClick={() => handleSort('purchases')}
                className="py-3.5 px-3 sm:px-4 cursor-pointer group hover:bg-zinc-50 border-r border-zinc-100/80 transition-colors w-[15%]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-zinc-800 text-xs sm:text-[13px] leading-tight block">
                    Purchases
                  </span>
                  <div className="flex flex-col text-zinc-400 group-hover:text-zinc-700">
                    {sortField === 'purchases' ? (
                      sortDirection === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-blue-600" /> : <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    )}
                  </div>
                </div>
              </th>

              {/* Column 5: Purchase ROAS */}
              <th
                onClick={() => handleSort('roas')}
                className="py-3.5 px-3 sm:px-4 cursor-pointer group hover:bg-zinc-50 border-r border-zinc-100/80 transition-colors w-[16%]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-zinc-800 text-xs sm:text-[13px] leading-tight block">
                    Purchase<br />ROAS...
                  </span>
                  <div className="flex flex-col text-zinc-400 group-hover:text-zinc-700">
                    {sortField === 'roas' ? (
                      sortDirection === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-blue-600" /> : <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    )}
                  </div>
                </div>
              </th>

              {/* Column 6: Purchases conversion value (Active Column Highlight) */}
              <th
                onClick={() => handleSort('revenue')}
                className="py-3.5 px-3 sm:px-4 cursor-pointer group bg-sky-50/40 hover:bg-sky-50 transition-colors w-[20%]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-sky-700 text-xs sm:text-[13px] leading-tight block">
                    Purchases<br />conversion...
                  </span>
                  <div className="flex flex-col text-sky-600">
                    {sortField === 'revenue' ? (
                      sortDirection === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-sky-700" /> : <ArrowUp className="w-3.5 h-3.5 text-sky-700" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-60 text-sky-500" />
                    )}
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-zinc-100">
            {sortedRows.map((row, idx) => {
              const isHighlight = row.isHighlighted;
              return (
                <tr
                  key={row.id || idx}
                  className={`transition-colors font-medium tabular-nums ${
                    isHighlight
                      ? 'bg-[#F0FDF4] hover:bg-[#DCFCE7] text-emerald-950 font-semibold'
                      : idx % 2 === 1
                      ? 'bg-zinc-50/60 hover:bg-zinc-100/60 text-zinc-800'
                      : 'bg-white hover:bg-zinc-50 text-zinc-800'
                  }`}
                >
                  {/* Adds to cart */}
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right border-r border-zinc-100/60">
                    <span className="underline decoration-dotted decoration-zinc-400/80 cursor-help">
                      {row.addsToCart.toLocaleString('en-US')}
                    </span>
                  </td>

                  {/* Cost per purchase */}
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right border-r border-zinc-100/60">
                    ${row.costPerPurchase.toFixed(2)}
                  </td>

                  {/* Amount spent */}
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right border-r border-zinc-100/60">
                    ${row.amountSpent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>

                  {/* Purchases */}
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right border-r border-zinc-100/60">
                    <span className="underline decoration-dotted decoration-zinc-400/80 cursor-help">
                      {row.purchases.toLocaleString('en-US')}
                    </span>
                  </td>

                  {/* ROAS */}
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right border-r border-zinc-100/60">
                    <span className={isHighlight || row.roas > 3.5 ? 'font-bold text-emerald-700' : ''}>
                      {row.roas.toFixed(2)}
                    </span>
                  </td>

                  {/* Revenue */}
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right bg-sky-50/20">
                    <span className="font-semibold text-zinc-900">
                      ${row.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>

          {/* Table Totals Row (Matching Meta Ads Report) */}
          <tfoot>
            <tr className="border-t-2 border-zinc-300 bg-white font-semibold text-zinc-900 tabular-nums">
              {/* Total Adds to cart */}
              <td className="py-3 px-3 sm:px-4 text-right border-r border-zinc-200">
                <div className="text-sm sm:text-base font-bold text-zinc-900">
                  {totals.addsToCart.toLocaleString('en-US')}
                </div>
                <div className="text-[10px] sm:text-[11px] font-normal text-zinc-500">
                  Total
                </div>
              </td>

              {/* Cost per purchase */}
              <td className="py-3 px-3 sm:px-4 text-right border-r border-zinc-200">
                <div className="text-sm sm:text-base font-bold text-zinc-900">
                  ${totals.costPerPurchase.toFixed(2)}
                </div>
                <div className="text-[10px] sm:text-[11px] font-normal text-zinc-500">
                  Per Action
                </div>
              </td>

              {/* Amount spent */}
              <td className="py-3 px-3 sm:px-4 text-right border-r border-zinc-200">
                <div className="text-sm sm:text-base font-bold text-zinc-900">
                  ${totals.amountSpent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-[10px] sm:text-[11px] font-normal text-zinc-500">
                  Total Spent
                </div>
              </td>

              {/* Purchases */}
              <td className="py-3 px-3 sm:px-4 text-right border-r border-zinc-200">
                <div className="text-sm sm:text-base font-bold text-zinc-900">
                  {totals.purchases.toLocaleString('en-US')}
                </div>
                <div className="text-[10px] sm:text-[11px] font-normal text-zinc-500">
                  Total
                </div>
              </td>

              {/* ROAS */}
              <td className="py-3 px-3 sm:px-4 text-right border-r border-zinc-200">
                <div className="text-sm sm:text-base font-extrabold text-emerald-700">
                  {totals.roas.toFixed(2)}
                </div>
                <div className="text-[10px] sm:text-[11px] font-normal text-zinc-500">
                  Average
                </div>
              </td>

              {/* Revenue */}
              <td className="py-3 px-3 sm:px-4 text-right bg-sky-50/40">
                <div className="text-sm sm:text-base font-extrabold text-zinc-950">
                  ${totals.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-[10px] sm:text-[11px] font-normal text-zinc-500">
                  Total
                </div>
              </td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};
