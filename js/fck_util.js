/**
 * fckeditor 셋팅
 * @param editorInstance
 * @return
 */
function FCKeditor_OnComplete(editorInstance) {

    editorInstance.Config['LinkBrowser'] = false;
    editorInstance.Config['ImageBrowser'] = false;
    editorInstance.Config['FlashBrowser'] = false;
    editorInstance.Config['LinkUpload'] = false;
    editorInstance.Config['ImageUpload'] = false;
    editorInstance.Config['FlashUpload'] = false;

    this.eFCK = editorInstance;
    //eFCK.InsertHtml("<table border='1'><tr><td>하이<td></tr></table>");
    //eFCK.InsertHtml("<p align='right'><img src='http://cfile218.uf.daum.net/image/203DCC0B4A0941C52EDF1A'></p>");
    //eFCK.InsertHtml("<p align='center'><img src='http://cfile218.uf.daum.net/image/203DCC0B4A0941C52EDF1A'></p>");
    //eFCK.InsertHtml("<p align='left'><img src='http://cfile218.uf.daum.net/image/203DCC0B4A0941C52EDF1A'></p>");
    //alert(eFCK.GetXHTML() );
}