import { getTenant } from '@app/utils';

const Tenant = () => {
	return getTenant();
};
export const appBackgroundColor = '#DEE4E8';
export const appFontColor = '#515151';
export const titleGray = '#5A5A5A';

export const whiteColor = '#FFFFFF';
export const whiteHoverColor = '#FAFAFA';
export const whiteActiveColor = '#F1F1F1';

export const primaryColor = '#494E9D';
export const primaryHoverColor = '#737BEC';
export const primaryActiveColor = '#737BEC';
export const primaryBackground = 'linear-gradient(161.48deg, #9096ED -36.17%, #494E9D 115.42%)';
export const cardBackgroud = 'linear-gradient(0deg, #F8F8FF, #F8F8FF)';

export const inputBackgroundColor = '#FAFBFC';
export const inputBackgroundHoverColor = '#EBECF0';
export const inputBorderColor = '#E3E5E9';

export const warmColor = '#EB5757';
export const warmHoverColor = '#FCCFCF';
export const warmActiveColor = '#FFB4B4';
export const warmBorderColor = '#FFB4B4';
export const warmBackground = '#FFEFEF';

export const secondaryColor = '#494E9D';
export const secondaryHoverColor = '#CED0F2';
export const secondaryActiveColor = '#BBBEEF';
export const secondaryBorderColor = '#BBBEEF';
export const secondaryBackground = '#F2F3FF';

export const primaryRed2: any = () => {
	if (Tenant() == 'SBI') {
		return '#BC333A';
	} else if (Tenant() == 'Abhi') {
		return '#BC333A';
	} else {
		return 'red';
	}
};
export const primaryRed: any = '#BC333A';
export const primarySBI = '#52B2EA';
export const bottomMenuSBI = '#752576';
export const lightPrimarySBI = '#E9F1FE';
export const lightPrimaryABHI = '#bc333a0d';
export const SBIBGTheme = 'linear-gradient(329.17deg, #2F6AAF 32.24%, #752576 96.83%)';

export const primaryPeach = '#C78C86';
export const secondaryYellow = '#F0A841';
export const primaryTextColor = '#434343';
export const warningOrange = '#E78C07';
export const successGreen = '#0C7D4E';
export const infoBlue = '#1452C9';
export const errorRed = '#8D1218';
export const greyv2 = '#E9E9E9';
export const secondaryColorV2 = '#fdf5f6';
export const textColor = '#242424';
export const greyTextColor = '#7C7C7B';

export const infoBackground = "#fefbe4";
/* 
    font colors
 */
export const lightFont = '#6F6F6F';
export const thickFont = '#313131';
export const grayText = '#a5a5a5';
export const successText = '#43BC73';
export const slotText = '#CBCBCB';
export const feeText = '#7b7b7b';
export const dateText = '#cfd1ec';
/* 
    border colors
 */
export const lightBorder = '#EEEEEE';
export const orangeBorder = '#f5c278';


