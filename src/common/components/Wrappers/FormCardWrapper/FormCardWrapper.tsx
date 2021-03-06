import React from 'react'
import { Container, AddSectionButton } from './FormCardWrapper.styles'

interface Props {
  title: string
  description?: string
  showAddSection: boolean
  addSectionText?: string
  onAddSection?: () => void
}

const FormCardWrapper: React.FunctionComponent<Props> = ({
  title,
  description,
  showAddSection,
  addSectionText,
  children,
  onAddSection,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
      {showAddSection && (
        <div style={{ textAlign: 'center' }}>
          <hr />
          <AddSectionButton type="button" onClick={onAddSection}>
            + {addSectionText || 'Add Section'}
          </AddSectionButton>
        </div>
      )}
    </Container>
  )
}

export default FormCardWrapper
