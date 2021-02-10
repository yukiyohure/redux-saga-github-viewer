import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import ErrorMessage from "../atoms/ErrorMessage";
import { getFormatedDate, validateRequired } from "../../utils";

const Wrapper = styled.div`
  max-width: 598px;
  margin: auto;
`;

const InputSection = styled.div`
  padding: 2rem 0 1rem;
`;

const MessageContainer = styled.section`
  padding: 1rem;
  min-height: 119px; /* エラー文が出てきてもボタンがしたに追いやられないよう、事前にスペースを開けておく。*/
`;

const FieldLabel = styled.label`
  display: block;
  padding: 0.5rem 0;
`;

const Field = styled.div`
  padding: 1rem;
`;

const CloseButton = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 4px;
  min-width: 100px;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  button {
    width: auto;
  }
`;

const EditIssue = ({ issue, hideModal, editIssue }) => {
  const [issueState, setIssueState] = useState(issue.status);
  const [issueTitle, setIssueTitle] = useState(issue.title);
  const [issueDescription, setIssueDescription] = useState(issue.description);
  const [errors, setErrors] = useState({ title: "", description: "" });

  const now = getFormatedDate(new Date());

  const onChangeStatus = (e) => {
    setIssueState(e.target.value);
  };

  const onSubmit = () => {
    const titleError = validateRequired(
      issueTitle,
      "タイトルを入力してください"
    );
    const descriptionError = validateRequired(
      issueDescription,
      "説明を入力してください"
    );

    if (titleError || descriptionError) {
      setErrors({ title: titleError, description: descriptionError });
      return;
    }

    const payload = {
      ...issue,
      title: issueTitle,
      status: issueState,
      description: issueDescription,
      updatedAt: now,
    };
    editIssue(payload);
    hideModal();
  };

  return (
    <Wrapper>
      <h2>Issueを編集</h2>
      <InputSection>
        <Field>
          <FieldLabel>タイトル</FieldLabel>
          <TextInput
            placeholder="タイトルを入力してください"
            value={issueTitle}
            onChange={setIssueTitle}
          />
        </Field>
        <Field>
          <FieldLabel>説明</FieldLabel>
          <TextArea
            placeholder="説明を入力してください"
            value={issueDescription}
            onChange={setIssueDescription}
          />
        </Field>
        <Field>
          <select value={issueState} onChange={onChangeStatus}>
            <option value="Open">Open</option>
            <option value="Close">Close</option>
          </select>
        </Field>
      </InputSection>
      <MessageContainer>
        {errors.title && <ErrorMessage message={errors.title}></ErrorMessage>}
        {errors.description && (
          <ErrorMessage message={errors.description}></ErrorMessage>
        )}
      </MessageContainer>
      <Footer>
        <Button styleType="primary" label="更新" onClick={onSubmit} />
        <CloseButton onClick={hideModal}>閉じる</CloseButton>
      </Footer>
    </Wrapper>
  );
};

EditIssue.propTypes = {
  issue: PropTypes.object,
  hideModal: PropTypes.func,
  editIssue: PropTypes.func,
};

export default EditIssue;
