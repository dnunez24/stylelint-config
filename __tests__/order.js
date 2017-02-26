describe('when property order is alphabetical', () => {
  const validCss = fixture('property-order-valid.css')
  
  beforeEach(() => {
    return result = stylelint.lint({
      code: validCss,
      config,
    })
  })
    
  it('does not error', () => {
    return result.then(data => {
      expect(data.errored).toBe(false)
    })
  })
  
  it('does not flag any warnings', () => {
    return result.then(data => {
      expect(data.results[0].warnings.length).toBe(0)
    })
  })
})
  
describe('when property order is not alphabetical', () => {
  const invalidCss = fixture('property-order-invalid.css')
  
  beforeEach(() => {
    return result = stylelint.lint({
      code: invalidCss,
      config,
    })
  })
  
  it('flags a warning', () => {
    return result.then(data => {
      expect(data.results[0].warnings[0].rule).toBe('order/declaration-block-properties-alphabetical-order')
    })
  })
})
