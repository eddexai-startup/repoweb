import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateRoofMetrics, PITCH_MULTIPLIERS, COMPLEXITY_MULTIPLIERS, SYSTEM_SPECS } from './quoteCalculator';

test('calculateRoofMetrics handles standard 2500 sqft moderate pitch house', () => {
  const result = calculateRoofMetrics({
    groundFootprintSqFt: 2500,
    pitch: 'moderate',
    complexity: 'moderate',
    systemType: 'standing_seam_metal',
  });

  // 2500 * 1.15 * 1.15 = 3306.25 -> 3306
  assert.equal(result.estimatedSurfaceAreaSqFt, 3306);
  assert.equal(result.roofSquares, 33.1);
  assert.equal(result.expectedLifespan, '50–80+ Years');
  assert.equal(result.fireRating, 'Class A (Non-combustible)');
});

test('calculateRoofMetrics clamps negative or zero input to minimum safe floor', () => {
  const result = calculateRoofMetrics({
    groundFootprintSqFt: -50,
    pitch: 'low',
    complexity: 'simple',
    systemType: 'commercial_membrane',
  });

  assert.ok(result.estimatedSurfaceAreaSqFt > 0);
  assert.ok(result.roofSquares > 0);
  assert.equal(result.expectedLifespan, '25–35 Years');
});

test('calculateRoofMetrics changes inspection cycle on steep/extreme roofs', () => {
  const steepResult = calculateRoofMetrics({
    groundFootprintSqFt: 3000,
    pitch: 'steep',
    complexity: 'complex',
    systemType: 'architectural_slate',
  });

  assert.equal(steepResult.recommendedInspectionCycle, 'Semi-Annual (Spring & Autumn)');
  assert.equal(steepResult.expectedLifespan, '75–125+ Years');
});

test('PITCH_MULTIPLIERS and COMPLEXITY_MULTIPLIERS contain all expected tiers', () => {
  assert.ok(PITCH_MULTIPLIERS.low.factor > 1.0);
  assert.ok(PITCH_MULTIPLIERS.extreme.factor >= 1.5);
  assert.ok(COMPLEXITY_MULTIPLIERS.complex.factor >= 1.2);
  assert.ok(SYSTEM_SPECS.protective_coating.name.includes('Restoration'));
});
