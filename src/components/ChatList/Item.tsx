import React from "react";
import borderRadius from "src/system-design/borderRadius";
import colors from "src/system-design/colors";
import typography from "src/system-design/typography";
import { threeDotTextNLine } from "src/utils/textHelper";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 12px 16px;
  height: 72px;

  display: flex;
  gap: 16px;
  align-items: center;

  cursor: pointer;
  &:hover {
    background: ${colors.purple[50]}80;
    border-radius: ${borderRadius.lg};
  }
`;

const AvatarWrapper = styled.div`
  height: 48px;
  width: 48px;
  background: #78e378;
  border-radius: ${borderRadius.full};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;

const NameText = styled.p`
  ${typography.name}
  font-weight: 600;
  flex: 1;
  ${threeDotTextNLine(1)}
`;

const LatestMessageTimeText = styled.span`
  ${typography.caption}
  color: ${colors.gray[600]}
`;

const LatestMessageText = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  flex: 1;

  color: ${colors.gray[600]};
  ${threeDotTextNLine(1)};
`;

interface UnreadMessageCountProps {
  $show: boolean;
}

const UnreadMessageCount = styled.span<UnreadMessageCountProps>`
  opacity: ${(props) => (props.$show ? 1 : 0)};

  padding: 1px 2px;
  min-width: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.red[400]};
  border-radius: ${borderRadius.full};

  color: ${colors.white};
  ${typography.caption}
`;

function Item() {
  const countMessage = 199;

  return (
    <Wrapper>
      <AvatarWrapper>
        <p>A</p>
      </AvatarWrapper>
      <div style={{ flex: 1 }}>
        <WrapperContent>
          <NameText>JDavid Moore</NameText>
          <LatestMessageTimeText>18:30</LatestMessageTimeText>
        </WrapperContent>
        <WrapperContent style={{ marginTop: 4 }}>
          <LatestMessageText>Ok, see you later</LatestMessageText>
          <UnreadMessageCount $show={Boolean(countMessage)}>
            {countMessage > 99 ? `${99}+` : countMessage}
          </UnreadMessageCount>
        </WrapperContent>
      </div>
    </Wrapper>
  );
}

export default Item;
