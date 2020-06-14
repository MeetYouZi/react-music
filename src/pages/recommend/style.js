import styled from 'styled-components'
import * as $color from 'style/variable'
import  * as mixins from 'style/mixins'

export const RankList = styled.div`
	padding-top: 10px;
`;

export const RankTitle = styled.div`
	font-size: ${$color.$fontSizeLarge};
  font-weight: bold;
  padding: 0 0 10px 16px;
  color: #4a4a4a;
`;

export const RankListTop = styled.div`
	margin-bottom: 20px;
	.rankSongListItem{
	  display: flex;
    align-items: center;
    margin: 0 16px 12px;
    border-radius: 8px 0 0 8px;
    background: var(--searchBg);
    .ank_list_left{
      flex: 1;
      overflow: hidden;
      .rank_list_tit{
        margin: 0 12px 4px 12px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 700;
        color: var(--color);
      }
      .rank_song_list{
        position: relative;
        .rank_song_list_item{
          margin: 0 12px 4px;
          line-height: 16px;
          color: var(--c_txt3);
          ${mixins.noWrap()}
        }
      }
    }
    .rank_list_media{
      position: relative;
      width: 107px;
      height: 107px;
      overflow: hidden;
      border-radius: 0 8px 8px 0;
      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: hsla(0, 0, 0, 0.5);
        filter: blur(20px);
        z-index: 1;
       }
      .rank_list_img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
	}
    
    
      
      
 
`;
